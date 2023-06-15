import { CarProps } from "@/types"

interface CardDetailsProps {
  isOpen: boolean
  closeModal: ()=> void
  car: CarProps
}

const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  return (
    <div>
      <h3>Card Details</h3>
    </div>
  )
}

export default CardDetails