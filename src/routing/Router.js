import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router