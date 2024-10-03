export default function (phoneNumber) {
  return phoneNumber.replace(/(\+\d\d)(\d{2})(\d{3})(\d{4})/, '0$2-$3-$4')
}
