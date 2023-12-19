import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import AppliedJob_card from "../../components/AppliedJobs_components/AppliedJob_card";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const savedJobString = localStorage.getItem("savedJobs");
  const existingData = savedJobString ? JSON.parse(savedJobString) : [];
  //filtering section
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filterJobs = (option) => {
    setSelectedFilter(option);
  };

  const filteredJobs = existingData.filter((job) => {
    if (selectedFilter === "all") {
      return true; // Show all jobs
    } else if (selectedFilter === "remote") {
      return job.remote === true; // Filter for remote jobs
    } else if (selectedFilter === "onsite") {
      return job.remote === false; // Filter for on-site jobs
    }
  });

  //   console.log(savedJobString);
  return (
    <>
      <section className="flex justify-end container w-4/5 ">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Options
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => filterJobs("all")}
                      className={classNames(
                        active
                          ? "bg-gray-400 text-green-900 font-bold "
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      All
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => filterJobs("remote")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Remote
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => filterJobs("onsite")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Onsite
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </section>
      <section>
        <div className="flex  flex-col justify-center items-center mx-auto my-4 lg:my-12">
       {
        savedJobString?
        <>
           {filteredJobs.map((jobs) => (
            <AppliedJob_card key={jobs.id} jobs={jobs}></AppliedJob_card>
          ))}
        </>
        :
        <h3 className="md:my-32 my-12 font-bold text-blue-950 text-xl tracking-wide">Sorry , you haven't applied to any jobs yet . <button className="btn btn-md btn-primary font-semibold"> <Link to="/alljobs">Go to Apply</Link> </button></h3>
       }
        </div>
      </section>
    </>
  );
};

export default AppliedJobs;
