import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    //TODO: add published able key
    const stipePromise = loadStripe ( import.meta.env.VITE_Payment_Gateway_Pk)
    return (
        <div>
            <SectionTitle
                subHeading={'Payment'}
                heading={'Please pay to eat'}
            />
            <div>
                <Elements  stripe={ stipePromise }>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;