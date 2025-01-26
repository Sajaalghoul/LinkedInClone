export const timeAgo = (timePosted) => {
  const timePostedDate = new Date(timePosted);
  const now = new Date();
  const diffInMs = now - timePostedDate;
  const secondsPast = Math.floor(diffInMs / 1000);

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`;
  } else if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  } else if (secondsPast < 2592000) {
    return `${Math.floor(secondsPast / 86400)} days ago`;
  } else if (secondsPast < 31104000) {
    return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  return `${Math.floor(secondsPast / 31104000)} years ago`;
};
