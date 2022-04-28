const sortGuestObjects = invites => [...invites].sort((a, b) => {
  if (a.guest.displayName > b.guest.displayName) return 1;
  if (a.guest.displayName < b.guest.displayName) return -1;
  return 0;
});

export default sortGuestObjects;
