import React from React;

function SmurfForm() {
  return (
    <div className="form">
      <form>
        <input 
          type='text'
          name='name'
          placeholder='name'
        />
        <input 
          type='text'
          name='age'
          placeholder='age'
        />
        <input 
          type='text'
          name='height'
          placeholder='height'
        />
      </form>
    </div>
  )
} 