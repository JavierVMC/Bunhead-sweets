import ContactForm from '../../../../components/contact_form/ContactForm';

const FormSection = () => {
  return (
    <div id="formSection" className="container">
      <div className="row">
        <div className="col-12 col-md-6 form-container">
          <ContactForm></ContactForm>
        </div>
        <div className="col-12 col-md-6 text-left text-container">
          <h1>¿Deseas algo personalizado?</h1>
          <p>También hacemos encargos totalmente personalizados !</p>
          <p>
            En caso que desees este servicio llena el formulario con tu pedido.
          </p>
          <p>Pronto te responderemos !</p>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
