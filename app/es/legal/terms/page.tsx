"use client";

export default function EsTermsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-3xl font-bold text-[#e5c98a]">Terminos y condiciones de servicios de consultoria</h1>
        <div className="space-y-1 text-sm text-white/70">
          <p>JulTech AI Consulting Group LLC</p>
          <p>Columbia, SC, Estados Unidos</p>
          <p>ai@jul-tech.com</p>
        </div>
        {[
          {
            title: "1. Aceptacion de los terminos",
            text: [
              "Al comprar servicios de consultoria a traves de este sitio y marcar la casilla de aceptacion, el cliente acepta quedar sujeto a estos Terminos y Condiciones.",
              "Esto constituye un acuerdo legalmente vinculante entre el Cliente y JulTech AI Consulting Group LLC (\"Consultor\").",
            ],
          },
          {
            title: "2. Alcance de los servicios",
            text: [
              "El Consultor se compromete a prestar los servicios descritos en el sitio web, propuesta o pagina del servicio seleccionada en el momento de la compra.",
              "Cualquier servicio no listado expresamente queda fuera del alcance y puede requerir un acuerdo separado o tarifas adicionales.",
              "Esto incluye consultoria en vivo y asincrona entregada por email, informes escritos o comunicacion digital.",
            ],
          },
          {
            title: "3. Condiciones de pago",
            text: [
              "El Cliente acepta pagar todas las tarifas indicadas al finalizar la compra.",
              "Se requiere un deposito no reembolsable del 40% antes de iniciar cualquier trabajo.",
              "El 60% restante debe pagarse antes de la entrega final de servicios, entregables o cierre del proyecto.",
              "El Consultor se reserva el derecho de pausar o retener trabajo hasta recibir el pago completo.",
              "Los entregables finales no se liberaran hasta recibir el pago total.",
            ],
          },
          {
            title: "4. Politica de reembolso",
            text: [
              "Todos los depositos son no reembolsables.",
              "Debido a la naturaleza de los servicios de consultoria, no se emitiran reembolsos una vez iniciado el trabajo.",
              "Cualquier excepcion quedara a discrecion exclusiva del Consultor.",
            ],
          },
          {
            title: "5. Responsabilidades del cliente",
            text: [
              "El Cliente se compromete a proporcionar informacion precisa y a tiempo.",
              "El Cliente se compromete a responder a las comunicaciones dentro de un plazo razonable.",
              "El Cliente se compromete a entregar todos los materiales necesarios para completar el proyecto.",
              "Los retrasos causados por el Cliente pueden afectar el cronograma y no eliminan las obligaciones de pago.",
            ],
          },
          {
            title: "6. Revisiones y cambios",
            text: [
              "Los servicios incluyen un numero razonable de revisiones salvo que se indique lo contrario.",
              "Revisiones adicionales, cambios de alcance o nuevas solicitudes pueden generar tarifas extra y requerir un acuerdo separado.",
            ],
          },
          {
            title: "7. Cronograma",
            text: [
              "Los cronogramas son estimaciones y dependen de la respuesta y colaboracion del Cliente.",
              "El Consultor no es responsable por retrasos causados por el Cliente o factores externos fuera de control razonable.",
            ],
          },
          {
            title: "8. Propiedad intelectual",
            text: [
              "El Consultor conserva la propiedad de procesos, frameworks, plantillas, metodologias y herramientas propias utilizadas para prestar los servicios.",
              "El Consultor se reserva el derecho de usar aspectos no confidenciales del trabajo en portfolio, casos de estudio y marketing.",
            ],
          },
          {
            title: "9. Confidencialidad",
            text: [
              "Ambas partes acuerdan mantener la confidencialidad de cualquier informacion propietaria, sensible o no publica compartida durante el trabajo conjunto.",
            ],
          },
          {
            title: "10. Limitacion de responsabilidad",
            text: [
              "El Consultor no sera responsable por danos indirectos, incidentales, especiales o consecuentes derivados de los servicios prestados.",
              "La responsabilidad total no excedera el monto total pagado por el Cliente por los servicios.",
            ],
          },
          {
            title: "11. Terminacion",
            text: [
              "El Consultor se reserva el derecho de terminar los servicios en cualquier momento si el Cliente incumple estos Terminos y Condiciones.",
              "Los pagos realizados no son reembolsables y cualquier saldo pendiente seguira siendo exigible.",
              "El Cliente puede terminar los servicios; sin embargo, los pagos realizados no son reembolsables y el trabajo completado o en progreso sera facturado segun corresponda.",
            ],
          },
          {
            title: "12. Ley aplicable y jurisdiccion",
            text: [
              "Este acuerdo se regira por las leyes del estado de Carolina del Sur, Estados Unidos.",
              "La jurisdiccion para cualquier disputa sera Columbia, South Carolina.",
            ],
          },
          {
            title: "13. Aceptacion electronica",
            text: [
              "Al marcar la casilla de aceptacion al pagar, introducir datos de pago y completar la transaccion, el Cliente reconoce y acepta que ha leido y entendido estos Terminos y Condiciones, que esta accion constituye una firma electronica y que el acuerdo es legalmente vinculante.",
            ],
          },
          {
            title: "14. Acuerdo completo",
            text: [
              "Estos Terminos y Condiciones constituyen el acuerdo completo entre el Cliente y el Consultor y reemplazan cualquier discusion o acuerdo previo.",
            ],
          },
        ].map((section, index) => (
          <section key={index} className="space-y-3">
            <h2 className="text-xl font-semibold text-[#e5c98a]">{section.title}</h2>
            {section.text.map((text, textIndex) => (
              <p key={textIndex} className="text-sm leading-7 text-white/80">{text}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}