export default function timeStamp(date) {
  if (date) {
    const jsDate = new Date(date);
    const nowDate = new Date();

    const years = nowDate.getFullYear() - jsDate.getFullYear();
    if (years > 0) return `${years} years ago`;

    const months = nowDate.getMonth() - jsDate.getMonth();
    if (months > 0) return `${months} month ago`;

    const days = nowDate.getDate() - jsDate.getDate();
    if (days > 0) return `${days} days ago`;

    const hours = nowDate.getHours() - jsDate.getHours();
    if (hours > 0) return `${hours} hours ago`;

    const minutes = Math.floor((nowDate.getSeconds() - jsDate.getSeconds()) / 60);
    if (minutes > 0) return `${minutes} minutes  ago`;

    return 'just now';
  }
  return date;
}
