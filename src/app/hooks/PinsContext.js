import { createContext, useState, useContext } from 'react';

export const PinsContext = createContext([]);

export const PinsProvider = ({ children }) => {
	const [pins, setPins] = useState([]);

	return (
		<PinsContext.Provider value={[pins, setPins]}>
			{children}
		</PinsContext.Provider>
	);
};

export const usePins = () => useContext(PinsContext);
