"use client"
import { db } from '@/config/firebase.config'
import { TimeStampToDate } from '@/utils/timestamp-date'
import { Button, TextField } from '@mui/material'
import { collection, getDoc, orderBy, query, where } from 'firebase/firestore'
import { useFormik } from 'formik'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import * as yup from "yup"

export default function RentList() {
    const [tenants, setTenants] = React.useState([]);
    const [filteredTenants, setFilteredTenants] = React.useState([]);
    const { data: session } = useSession()

    React.useEffect(() => {
        const fetchTenants = async () => {
            try {
                const q = query(
                    collection(db, "tenants"),
                    where("user", "==", session?.user?.id),
                    // orderBy("timeCreated", "desc")

                )
                const snapShot = await getDocs(q)
                const compileTenant = []
                snapShot.docs.forEach((doc) => {

                    compileTenant.push({
                        id: doc.id,
                        data: doc.data()
                    })
                });
                setTenants(compileTenant);
                setFilteredTenants(compileTenant)
            } catch (error) {
                console.error("Error occured while fetching tenants", error)
            }

        }
        if (session) {
            fetchTenants();
        }
    }, [session])
    // Formik with yup validation for search field
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            search: "",
        },
        validationSchema: yup.object({
            search: yup.string().max(30, "search query too long").matches(/^[a-zA-z\s]*$/, "Only letters and spaces allowed").nullable(),
        }),
        onSubmit: (values) => {
            const searchQuery = values.search.trim()
            if (searchQuery === "") {
                setFilteredTenants(tenants)
            } else {
                const filtered = tenants.filter(tenant => {
                    const fullName = tenant.data.fullName || "";
                    return fullName.toLowerCase().includes(searchQuery.toLowerCase())
                })
                setFilteredTenants(filtered)
            }
        }
    })
    return (
        <main className='min-h-screen mx-auto px-6 py-8 bg-gray-50 shadow-lg rounded-xl'>
            <h1 className='text-3xl font-semi-bold mb-6 text-center'>Tenant List</h1>
            <p className='text-center text-gray-500 mb-6'>Collection of All Rents Paid</p>
            <div className='max-w-md mx-auto mb-8 px-4'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div>
                        <TextField
                            fullWidth
                            size='small'
                            variant='outlined'
                            label='search by tenants name'
                            name='search'
                            value={values.search}
                            id='search'
                            onChange={handleChange}
                        />
                        {touched.search && errors.search ? <span className="text-red-500 text-xs">{errors.search} </span> : null}
                    </div>

                    <Button type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth>
                        search
                    </Button>
                </form>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 px-10'>
                {filteredTenants.map(tenants => (
                    <div key={tenants.id}>
                        {/* Tenant Image */}
                        <Image
                            src="/images/dillon-kydd-3Ignkeds3w8-unsplash.jpg"
                            alt="my-image"
                            width={300}
                            height={300}
                            className='rounded-t-xl'
                        />
                        {/* Tenant Details */}
                        <div className='p-4'>
                            <span className='block font-semibold text-gray-800'>{tenants.data.fullName}</span>
                            <span className='block text-sm text-gray-500'>{tenants.data.phone}</span>
                            <span className='block text-sm text-gray-500'>{tenants.data.email}</span>
                            <span className='block font-medium text-gray-800'>{tenants.data.apartment}</span>
                            <span className='block font-semibold'>{tenants.data.rentAmount}</span>
                            <span className='block text-sm font-semibold text-gray-500'>{tenants.data.dueDate}</span>
                            <span className='block text-sm font-semibold text-green-500'>{tenants.data.paymentStatus}</span>
                            <span className='block text-sm  text-grey-800'>{TimeStampToDate(tenants.data.timeCreated)}</span>
                            <span className='block text-sm text-grey-600'>{tenants.data.notes}</span>

                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}
