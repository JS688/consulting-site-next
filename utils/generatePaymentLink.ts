export function generatePaymentLink({
  amount,
  name,
  project,
}: {
  amount: number;
  name: string;
  project: string;
}) {
  const baseUrl = "https://jultechai.com/pay";

  const params = new URLSearchParams({
    amount: amount.toString(),
    name,
    project,
  });

  return `${baseUrl}?${params.toString()}`;
}
