import React, { useCallback, useState } from 'react';
import Input from '@/components/Input';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  return (
    <div
      className='
    relative
    h-full
    w-full
    bg-[url("/images/hero.jpg")]
    bg-no-repeat
    bg-cover
    bg-center
    bg-fixed
  '>
      <div className='w-full h-full bg-black lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo.png' alt='logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='self-center w-full px-16 py-16 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md'>
            <h2 className='mb-8 text-4xl font-semibold text-white '>
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username'
                  onChange={(ev: any) => setName(ev.target.value)}
                  id='name'
                  type='text'
                  value={name}
                />
              )}

              <Input
                label='Email'
                onChange={(ev: any) => setEmail(ev.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(ev: any) => setPassword(ev.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button className='w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700'>
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className='mt-12 text-neutral-500'>
              {variant === 'login'
                ? 'first time using netflix?'
                : 'Already have an account'}
              <span
                onClick={toggleVariant}
                className='ml-1 text-white cursor-pointer hover:underline'>
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
