import React from 'react';

const RSVP = () => (
  <div>
    <h2>Can&apos;t wait to see you there </h2>
    <p>
      If you&apos;re responding for you and a guest (or your family), you&apos;ll be able to RSVP for your entire group.
    </p>
    <form action="/rsvp">
    Full name: <input type="text" name="full_name" />
      <input type="submit" value="Find your invitation" />
    </form>
  </div>
);
export default RSVP;
