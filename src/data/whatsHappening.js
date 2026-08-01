// Edit this by hand whenever a new order drop or pop-up is scheduled.
// orderDrop.status: 'open' | 'closed' | 'none'
// popUp.status: 'scheduled' | 'none'
export const WHATS_HAPPENING = {
  orderDrop: {
    status: 'none',
    // Shown when status is 'open':
    windowText: "Ordering closes Thu at 9pm · pickup Sat, 10am–1pm",
    urgencyText: 'Only 3 left',
    // Shown when status is 'closed':
    reopensText: 'Opens next Thursday at 6pm',
  },
  popUp: {
    status: 'none',
    // Shown when status is 'scheduled':
    dateText: 'Saturday, July 25 · 10am–2pm',
    location: 'Riverside Farmers Market',
  },
};
