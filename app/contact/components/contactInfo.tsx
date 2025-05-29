import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaPhone,
      title: "Téléphone",
      details: ["+222 XX XX XX XX", "+222 XX XX XX XX"],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["contact@mmlh.mr"],
    },
    {
      icon: FaMapMarkerAlt,
      title: "Adresse",
      details: ["Nouakchott, Mauritanie"],
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Informations de contact
      </h2>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-primary mt-1">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
