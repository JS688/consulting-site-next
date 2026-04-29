"use client";

import Link from "next/link";

export default function EsPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/es"
          className="mb-6 inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white"
        >
          ← Volver
        </Link>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Politica de privacidad</h1>
            <p className="mt-2 text-sm text-white/50">Ultima actualizacion: abril 2026</p>
          </div>
          <div className="border-t border-white/10" />
          <section className="space-y-6 text-sm text-white/80">
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">1. Introduccion</h2>
              <p>Esta Politica de Privacidad explica como JulTech AI Consulting Group LLC ("nosotros") recopila, usa, almacena y protege la informacion personal proporcionada por clientes y visitantes ("usted") al usar este sitio web o nuestros servicios de consultoria.</p>
              <p>Al acceder a este sitio o enviar informacion mediante cualquier formulario, usted acepta las practicas descritas en esta Politica de Privacidad.</p>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">2. Informacion que recopilamos</h2>
              <p className="font-semibold text-white">Informacion que usted proporciona</p>
              <ul className="ml-6 list-disc">
                <li>Nombre</li>
                <li>Correo electronico</li>
                <li>Numero de telefono (si se proporciona)</li>
                <li>Detalles del proyecto o mensajes enviados por formularios</li>
                <li>Firma electronica (nombre escrito o "V")</li>
                <li>Informacion de facturacion y pago (procesada de forma segura por terceros)</li>
              </ul>
              <p className="mt-2 font-semibold text-white">Informacion recopilada automaticamente</p>
              <ul className="ml-6 list-disc">
                <li>Direccion IP</li>
                <li>Tipo de navegador</li>
                <li>Informacion del dispositivo</li>
                <li>Paginas visitadas</li>
                <li>Cookies basicas necesarias para la funcionalidad del sitio</li>
              </ul>
              <p>No recopilamos informacion personal sensible salvo que usted la proporcione voluntariamente.</p>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">3. Como usamos su informacion</h2>
              <ul className="ml-6 list-disc">
                <li>Responder solicitudes de consultoria</li>
                <li>Comunicarnos sobre su proyecto</li>
                <li>Prestar servicios de consultoria y desarrollo web</li>
                <li>Enviar facturas, confirmaciones de pago y mensajes administrativos</li>
                <li>Mejorar el rendimiento del sitio y la experiencia del usuario</li>
                <li>Mantener registros del negocio</li>
                <li>Cumplir obligaciones legales</li>
              </ul>
              <p>No usamos su informacion para publicidad ni la revendemos.</p>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">4. Procesamiento de pagos</h2>
              <ul className="ml-6 list-disc">
                <li>Todos los pagos son gestionados por procesadores seguros de terceros como Stripe o PayPal.</li>
                <li>No almacenamos ni tenemos acceso al numero completo de su tarjeta.</li>
                <li>Su informacion de pago se procesa segun la politica de privacidad del proveedor de pago.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">5. Compartir informacion</h2>
              <ul className="ml-6 list-disc">
                <li>No vendemos ni alquilamos su informacion personal.</li>
                <li>Podemos compartir informacion solo con:</li>
              </ul>
              <ul className="ml-10 list-disc">
                <li>Proveedores esenciales de servicio (hosting, email, pagos)</li>
                <li>Autoridades legales cuando la ley lo requiera</li>
                <li>Colaboradores que asistan en su proyecto, solo cuando sea necesario y bajo confidencialidad</li>
              </ul>
              <p>Todos los proveedores externos deben proteger su informacion.</p>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">6. Cookies y analitica</h2>
              <ul className="ml-6 list-disc">
                <li>Este sitio puede usar cookies minimas para funcionalidad basica, seguridad y monitoreo de rendimiento.</li>
                <li>Si se usan herramientas de analitica como Google Analytics, podrian recopilar datos anonimos de uso.</li>
                <li>Si lo prefiere, puede desactivar cookies en la configuracion de su navegador.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">7. Conservacion de datos</h2>
              <p>Conservamos la informacion solo durante el tiempo necesario para prestar servicios, operar el negocio y cumplir obligaciones legales o financieras.</p>
              <ul className="ml-6 list-disc">
                <li>Solicitudes de consultoria: hasta 12 meses</li>
                <li>Archivos de proyectos de clientes: hasta 3 anos</li>
                <li>Registros financieros: 7 anos</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">8. Sus derechos</h2>
              <p>Segun su ubicacion, usted puede tener derecho a solicitar acceso, correccion, eliminacion o una copia de sus datos, asi como retirar su consentimiento cuando corresponda.</p>
              <p>Para ejercer estos derechos, escribanos a <a href="mailto:ai@jul-tech.com" className="underline">ai@jul-tech.com</a>.</p>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">9. Seguridad de los datos</h2>
              <ul className="ml-6 list-disc">
                <li>Tomamos medidas razonables para proteger su informacion, incluyendo hosting cifrado, proveedores de email seguros, pagos cifrados y acceso limitado a datos personales.</li>
                <li>Sin embargo, ningun sistema online es 100% seguro y no podemos garantizar proteccion absoluta.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">10. Privacidad de menores</h2>
              <ul className="ml-6 list-disc">
                <li>Este sitio y nuestros servicios no estan dirigidos a menores de 18 anos.</li>
                <li>No recopilamos intencionalmente informacion de menores.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">11. Enlaces a sitios de terceros</h2>
              <ul className="ml-6 list-disc">
                <li>Nuestro sitio puede contener enlaces a sitios externos.</li>
                <li>No somos responsables de sus practicas de privacidad ni de su contenido.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">12. Actualizaciones de esta politica</h2>
              <ul className="ml-6 list-disc">
                <li>Podemos actualizar esta Politica de Privacidad periodicamente.</li>
                <li>La version mas reciente siempre se publicara en esta pagina con la fecha actualizada.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold text-white">13. Informacion de contacto</h2>
              <ul className="ml-6 list-disc">
                <li>Para preguntas sobre esta Politica de Privacidad o sus datos, contacte a:</li>
                <li>JulTech AI Consulting Group LLC</li>
                <li>Columbia, SC, Estados Unidos</li>
                <li><a href="mailto:ai@jul-tech.com" className="underline">ai@jul-tech.com</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}