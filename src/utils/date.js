 const formatDate = (date) => {
    const twoDigits = (num) => String(num).padStart(2, '0');
    
    const year = date.getFullYear();
    const month = twoDigits(date.getMonth() + 1); // Os meses começam em 0
    const day = twoDigits(date.getDate());
    const hours = twoDigits(date.getHours());
    const minutes = twoDigits(date.getMinutes());
    const seconds = twoDigits(date.getSeconds());
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  };

  module.exports.formatDate