"use client"
import Image from 'next/image'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyInputText } from '../../../components/inputFormik/MyInputText';



export const FromLogin = () => {


    return (<>
        <Formik
            initialValues={{
                correo: "",
                clave: "",
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                clave: Yup.string()
                    .required("Es Requerido"),
                correo: Yup.string().email("No tiene un formato Valido").required("Campo Requerido"),
            })}
        >

            {(formik) => (
                <Form className="mt-5">
                    <div className="space-y-5 xl:w-[55%] lg:w-[55%] mx-auto w-full">
         
                            <MyInputText label="Correo" name="correo" />
     
                            <MyInputText label="Contraseña" name="clave" type='password' />

                        <div>
                            <p className="text-end text-blue-500 font-black">¿Olvidaste Contraseña?</p>
                        </div>
                        <button className="bg-blue-500 text-white px-10 py-2 w-full rounded-md">INGRESAR AULA VIRTUAL</button>
                        <div className="flex items-center justify-between">
                            <div className="bg-gray-200 h-0.5 w-[30%]"></div>
                            <p className="text-gray-300">O ingresa con</p>
                            <div className="bg-gray-200 h-0.5 w-[30%]"></div>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-3 text-center flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 gap-2">
                                <Image unoptimized src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/06/facebook_blanco.png" alt="Facebook" width={15} height={15} />
                                FACEBOOK
                            </button>
                            <button type="button" className="text-dark bg-white border focus:ring-4 focus:outline-none focus:shadow-blue-500 font-medium rounded-lg text-sm px-5 py-3 text-center flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-2">
                                <Image unoptimized src="https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/06/google_colorido.png" alt="google" width={15} height={15} />
                                GOOGLE
                            </button>
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <p className='font-black'>¿No tienes una cuenta?</p>
                            <span className='text-blue-500 font-normal'>¡Registrate Ahora!</span>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </>
    )
}