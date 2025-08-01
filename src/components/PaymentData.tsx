import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { paymentInformation } from "@/constants/banks";

interface PaymentDataProps {
  priceExchange: string;
  price: string;
  valueExchange: string;
  dateValueExchange: string;
  handleButtonClick: () => void;
}

export default function PaymentData({
  priceExchange,
  price,
  valueExchange,
  dateValueExchange,
  handleButtonClick,
}: PaymentDataProps) {
  const subTotal = Number(priceExchange);
  const iva = parseFloat((subTotal * 0.16).toFixed(2));
  const total = parseFloat((subTotal + iva).toFixed(2));

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold text-center">Datos de pago</h1>
          <p className="text-sm text-muted-foreground">
            Utiliza los siguientes datos para realizar el pago correspondiente a
            tu mensualidad
          </p>
        </CardHeader>

        <CardContent>
          <div className="mb-6 p-4 bg-muted/5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Sede Catia</h2>
            <div className="space-y-2">
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Destino:</span>
                <span className="font-bold text-primary">
                  {paymentInformation.bankName}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">RIF:</span>
                <span className="font-bold text-primary">
                  {paymentInformation.taxDocument}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Teléfono:</span>
                <span className="font-bold text-primary">
                  {paymentInformation.phone}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Sub Total:</span>
                <span className="font-bold text-primary">
                  VES{" "}
                  {`${Intl.NumberFormat("es-VE").format(
                    Number(subTotal)
                  )} | $${price}`}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">IVA:</span>
                <span className="font-bold text-primary">
                  {`${Intl.NumberFormat("es-VE").format(Number(iva))}`}
                </span>
              </div>
              <div className="flex md:justify-between max-md:gap-2">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-bold text-primary">
                  VES {`${Intl.NumberFormat("es-VE").format(Number(total))}`}
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm mt-4 text-muted-foreground">
            <div className="space-x-2 text-center ">
              <span>Valor de tasa de cambio</span>
              <span className="font-bold text-gray-700">
                {Intl.NumberFormat("es-VE").format(Number(valueExchange))}
              </span>
            </div>
            <div className="space-x-2 text-center">
              <span>según Banco Central de Venezuela el</span>
              <span className="font-bold text-gray-700">
                {dateValueExchange}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={handleButtonClick}>
            Ya pagué
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
