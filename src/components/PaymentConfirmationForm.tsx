import { useState } from "preact/hooks";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ROUTES } from "../constants/routes";
import PaymentData from "./PaymentData";

interface FormPaymentConfirmationProps {
  token: string;
  userId: string;
  buyOrderId: string;
  price: string;
  productName: string;
  description: string;
  priceExchange: string;
  value: string;
  dateValue: string;
}

export default function PaymentConfirmationForm({
  token,
  userId,
  buyOrderId,
  price,
  productName,
  description,
  priceExchange,
  value,
  dateValue,
}: FormPaymentConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPaymentData, setShowPaymentData] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const referenceNumber = formData.get("referenceNumber") as string;

      const payload = {
        securityId: token,
        userId,
        buyOrderId,
        amount: price,
        referenceNumber,
        priceExchange,
        value,
        dateValue,
      };

      const response = await fetch(ROUTES.SEND_PAYMENT_CONFIRMATION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        window.location.href = "/transaction-failed";
        return;
      }

      const result = await response.json();
      console.log("Payment confirmation sent successfully:", result);

      setSuccess(true);
      const reference = result.reference;
      const buyOrder = result.buyOrderId;

      window.location.href = `/success?operation=${reference}&buy-order=${buyOrder}`;
    } catch (err) {
      console.error("Error sending payment confirmation:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Error al enviar la confirmación de pago"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    setShowPaymentData(false);
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h2 className="text-xl font-semibold mb-2">
                Confirmación Enviada
              </h2>
              <p className="text-muted-foreground">
                Tu confirmación de pago ha sido enviada exitosamente.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showPaymentData) {
    return (
      <PaymentData
        priceExchange={priceExchange}
        price={price}
        handleButtonClick={handleButtonClick}
        valueExchange={value}
        dateValueExchange={dateValue}
      />
    );
  }

  const subTotal = Number(priceExchange);
  const iva = parseFloat((subTotal * 0.16).toFixed(2));
  const total = parseFloat((subTotal + iva).toFixed(2));

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold text-center">
            Confirmación de Pago
          </h1>
          <p className="text-sm text-muted-foreground">
            Confirma tu pago para continuar con el proceso de inscripción con el
            número de referencia de pago móvil.
          </p>
        </CardHeader>

        <CardContent>
          {/* Product Information Display */}
          <div className="mb-6 p-4 bg-muted/5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">
              Detalles del Producto
            </h2>
            <div className="space-y-2">
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Producto:</span>
                <span className="font-medium">{productName}</span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Descripción:</span>
                <span className="font-medium">{description}</span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Sub Total:</span>
                <span className="font-medium">
                  VES{" "}
                  {`${Intl.NumberFormat("es-VE").format(
                    Number(subTotal)
                  )} | $${price}`}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">IVA:</span>
                <span className="font-medium">
                  {`${Intl.NumberFormat("es-VE").format(Number(iva))}`}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-medium">
                  VES {`${Intl.NumberFormat("es-VE").format(Number(total))}`}
                </span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Payment Confirmation Form */}
          <form id="payment-form" onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden fields */}
            <input type="hidden" name="securityId" value={token} />
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="buyOrderId" value={buyOrderId} />
            <input type="hidden" name="amount" value={price} />
            <input type="hidden" name="priceExchange" value={priceExchange} />
            <input type="hidden" name="valueExchange" value={value} />
            <input type="hidden" name="dateValueExchange" value={dateValue} />

            {/* Reference Number Input */}
            <div className="space-y-2">
              <Label htmlFor="referenceNumber">Número de Referencia</Label>
              <Input
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                required
                placeholder="Ingrese el número de referencia"
                disabled={isLoading}
              />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            form="payment-form"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Confirmar Pago"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
