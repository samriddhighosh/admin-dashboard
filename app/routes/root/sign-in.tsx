import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import React from 'react'
import { Link, redirect } from 'react-router'
import { loginWithGoogle } from '~/appwrite/auth'
import { account } from '~/appwrite/client';

export async function clientLoader() {
    try{
        const user = await account.get();

        if(user.$id) return redirect('/dashboard')

    } catch(e){
        console.log('Error loading component', e)
    }
}

const SignIn = () => {
    
  return (
    <main className='auth'>
        <section className='size-full glassmorphism flex-center px-6'>
            <div className='sign-in-card'>
                <header className='header'>
                    <Link to="/" />
                    <img src="/assets/icons/logo.svg" alt="logo" className='size-[30px]' />
                    <h1 className='sp-28 bold text-dark-100'>Tourvisto</h1>
                </header>
                <article>
                    <h2 className='p-28-semibold text-dark-100 text-center'>Start Your Travel Journey</h2>
                    <p className='p-18-regular text-center text-gray-100 !leading-7'>Sign in with Goolge yo manage destination, </p>
                </article>
                <ButtonComponent iconCss="e-searcg-icon" className='button-class !h-11 !w-full' type='button' onClick={loginWithGoogle}>
                    <img src="/assets/icons/google.svg" className='size-5'  />
                    <span className='p-18-semibold text-white'>Sign in With Google</span>
                </ButtonComponent>
            </div>
        </section>
    </main>
  )
}

export default SignIn