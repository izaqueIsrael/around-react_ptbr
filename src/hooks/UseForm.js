import React, { useRef, useState } from 'react';

function useForm() {
  const form = useRef();
  const [send, setSend] = useState(false)
  return { form, send, setSend }
  console.log('abACATE')
}

export default useForm;