"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <Image
          src="/assets/images/logo.svg"
          alt="Digister logo"
          width={30}
          height={30}
          className="object-contain"
        /> */}
        <p className="logo_text">Digister</p>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/request-file" className="black_btn">
              Request File
            </Link>
            <Link href="/register" className="black_btn">
              Register
            </Link>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((providers) => (
                <button
                  type="button"
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
           <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/register"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Register File
                </Link>
                <button
                type="button"
                onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                }}
                className="mt-5 w-full black_btn"
                >
                    Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((providers) => (
                <button
                  type="button"
                  key={providers.name}
                  onClick={() => signIn(providers.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
