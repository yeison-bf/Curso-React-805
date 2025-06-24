
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../feature/lading/lading";
import { Abaout } from "../feature/lading/pages/about/abaout";
import { Services } from "../feature/lading/pages/services/services";
import { Contacts } from "../feature/lading/pages/contacts/contacts";
import { Login } from "../feature/lading/pages/auth/login";
import { Layout } from "../feature/dashboard/layout";
import { Users } from "../feature/dashboard/pages/users/users";
import { Company } from "../feature/dashboard/pages/companies/company";
import { ServicesHome } from "../feature/dashboard/pages/services/services";
import { Home } from "../feature/dashboard/pages/home/home";
import { FormUsers } from "../feature/dashboard/pages/users/components/FormUsers";

const RoutesModule = () => {

    return (
        <>
            <Routes>

                {/* Rutas de la landing */}
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<Abaout />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />

                {/* Rutas del dashboard */}
                <Route path="/app" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="users/register" element={<FormUsers />} />
                    <Route path="companies" element={<Company />} />
                    <Route path="services" element={<ServicesHome />} />
                </Route>

            </Routes>
        </>
    )
}

export default RoutesModule;