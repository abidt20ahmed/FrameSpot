'use client';

import { Footer } from 'flowbite-react';

const SharedFooter = () => {
    return (
        <Footer container className='  rounded-none xl:px-36'>
      <div className="w-full text-center ">
        <div className="w-full flex flex-col gap-4 lg:flex-row justify-between items-center">
          <Footer.Brand
            alt="Flowbite Logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <Footer.LinkGroup className=' flex-col md:flex-row gap-4'>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Flowbite™"
          href="#"
          year={2022}
        />
      </div>
    </Footer>
    );
};

export default SharedFooter;