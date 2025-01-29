const Button = ({ item }) => {
  return (
    <button
      className="bg-gradient-to-r from-primary to-secondary 
    hover:from-secondary hover:to-primary 
    transition-all duration-500 
    text-white px-3 py-1 rounded-full"
    >
      {item}
    </button>
  );
};

export default Button;
