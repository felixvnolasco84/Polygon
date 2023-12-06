const SimpleContactEmail = ({ name, email, phoneNumber }: any) => (
  <div>
    <h1>Nuevo Contacto</h1>
    <p>
      De <strong>{name}</strong> con el correo {email}
    </p>
    <p>Telefono: {phoneNumber}</p>
  </div>
);

export default SimpleContactEmail;
