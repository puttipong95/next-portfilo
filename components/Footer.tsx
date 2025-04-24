import React from 'react'

const Footer = () => {
  const years = new Date().getFullYear();

  return (
    <div className="flex justify-around border-t-muted border-t-1 p-6">
      © {years} Puttipong Seangpor. All rights reserved
    </div>
  );
}

export default Footer