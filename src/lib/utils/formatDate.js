
export const formatDate = function (dateString) {
  const date = dateString ? new Date(dateString) : new Date()
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
  })
}