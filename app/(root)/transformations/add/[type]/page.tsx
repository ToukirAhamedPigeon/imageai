import Header from '@/components/shared/Header'
import React from 'react'
import {transformationTypes} from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.action';
const AddTransformationTypePage = async ({ params }: {params: Promise<{ type: string }>}) => {
  const { type } = await params;
  const {userId} = await auth();
  if(!userId){
    redirect('/sign-in')
  }
  const user = await getUserById(userId);
  if(!user){
    redirect('/sign-in')
  }
  const transformation = transformationTypes[type as keyof typeof transformationTypes];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className='mt-10'>
        <TransformationForm  action="Add" userId={user._id} type={transformation.type as TransformationTypeKey} creditBalance={user.creditBalance} />
      </section>
      
    </>
  )
}

export default AddTransformationTypePage
