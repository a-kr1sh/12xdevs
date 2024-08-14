interface User {
    id: number;
    name: string;
    email: string;
    // Omit password for security reasons (avoid storing passwords in plain text)
  }
   
  type UserProfile = Pick<User, 'name' | 'email'>;
  
  type UpdatePartial = Partial<UserProfile>;
  
  function updatePartialOptional(updateProps: UpdatePartial) {
    // Access properties safely using optional chaining
    console.log(`Name (if provided): ${updateProps.name}`);
    console.log(`Email (if provided): ${updateProps.email}`);
  }
  
  // Corrected call with object literal syntax
  updatePartialOptional({ name: "Aagja Krish" });