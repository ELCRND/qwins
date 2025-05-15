const СompareIcon = ({ id }: { id: string }) => {
  return (
    <svg style={{ display: "none" }}>
      <symbol id={id} viewBox="4 0 40 40">
        <path
          d="M12 24H36"
          stroke="#0082FB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 36V12"
          stroke="#0082FB"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
};

export default СompareIcon;
