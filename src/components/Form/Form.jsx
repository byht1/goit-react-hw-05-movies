// import React, { useState } from 'react';

export default function Form({ submit, value, onChang }) {
  // const [text, setText] = useState('');
  // function onChange(event) {
  //     console.log(event.value);
  //     // body
  // }
  return (
    <div>
      <form autoComplete="on" onSubmit={submit}>
        <input
          type="text"
          value={value}
          name="name"
          onChange={e => onChang(e.target.value)}
        />
      </form>
    </div>
  );
}
