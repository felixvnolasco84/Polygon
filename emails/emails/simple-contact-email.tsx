type SimpleContactEmailProps = {
  name: string;
  email: string;
  phoneNumber?: string;
};

const SimpleContactEmail = ({
  name,
  email,
  phoneNumber,
}: SimpleContactEmailProps) => (
  <div>
    <h1>Nuevo Contacto</h1>
    <p>
      De <strong>{name}</strong> con el correo {email}
    </p>
    {phoneNumber && <p>Telefono: {phoneNumber}</p>}
  </div>
);

export default SimpleContactEmail;
