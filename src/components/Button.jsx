const Button = ({ item }) => {
  return (
    <button
      className="bg-gradient-to-r from-primary to-secondary 
    hover:from-secondary hover:to-primary 
    transition-all duration-500 
    text-white px-4 py-1 rounded-full hover:scale-105"
    >
      {item}
    </button>
  );
};

export default Button;
