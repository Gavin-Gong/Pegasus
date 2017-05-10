export function timeStamp(date) {
  if (date) {
    const jsDate = new Date(date);
    const nowDate = new Date();

    const years = nowDate.getFullYear() - jsDate.getFullYear();
    if (years > 0) return `${years} 年前`;

    const months = nowDate.getMonth() - jsDate.getMonth();
    if (months > 0) return `${months} 月前`;

    const days = nowDate.getDate() - jsDate.getDate();
    if (days > 0) return `${days} 天前`;

    const hours = nowDate.getHours() - jsDate.getHours();
    if (hours > 0) return `${hours} 小时前`;

    const minutes = Math.floor((nowDate.getSeconds() - jsDate.getSeconds()) / 60);
    if (minutes > 0) return `${minutes} 分钟前`;

    return '刚刚';
  }
  return date;
}

export function imgView(url, w = 0, h = 0, mode = 2) {
  if (url) {
    return `${url}?imageView2/${mode}/w/${w}/h/${h}`;
  }
  return url;
}
