import React, { useState } from "react";
import { motion } from "framer-motion";

const BMICard = () => {
  const [w, setW] = useState("");
  const [wu, setWu] = useState("kg");
  const [h, setH] = useState("");
  const [hu, setHu] = useState("cm");
  const [bmi, setBmi] = useState(null);
  const [cat, setCat] = useState("");

  const toKg = (v, u) => {
    const x = parseFloat(v);
    return u === "kg" ? x : u === "g" ? x / 1000 : x * 0.4536;
  };

  const toM = (v, u) => {
    const x = parseFloat(v);
    return u === "cm" ? x / 100 : u === "m" ? x : u === "feet" ? x * 0.3048 : x * 0.0254;
  };

  const calc = () => {
    const kg = toKg(w, wu), m = toM(h, hu);
    if (!kg || !m || kg <= 0 || m <= 0) return setCat("Invalid Input"), setBmi(null);
    const b = (kg / (m * m)).toFixed(2);
    setBmi(b);
    setCat(b < 18.5 ? "Underweight" : b < 25 ? "Normal" : b < 30 ? "Overweight" : "Obese");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl p-6 w-full max-w-md"
    >
      <h1 className="text-2xl font-bold text-center mb-5">BMI Calculator</h1>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Weight"
            className="flex-1 p-2 border rounded"
            value={w}
            onChange={(e) => setW(e.target.value)}
          />
          <select
            value={wu}
            onChange={(e) => setWu(e.target.value)}
            className="p-2 rounded border bg-white dark:bg-zinc-800"
          >
            <option value="kg">kg</option>
            <option value="g">grams</option>
            <option value="lbs">lbs</option>
            <option value="pounds">pounds</option>
          </select>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Height"
            className="flex-1 p-2 border rounded"
            value={h}
            onChange={(e) => setH(e.target.value)}
          />
          <select
            value={hu}
            onChange={(e) => setHu(e.target.value)}
            className="p-2 rounded border bg-white dark:bg-zinc-800"
          >
            <option value="cm">cm</option>
            <option value="m">meter</option>
            <option value="feet">feet</option>
            <option value="inch">inch</option>
          </select>
        </div>

        <button
          onClick={calc}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded transition-all"
        >
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <motion.div
          className="mt-5 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg font-semibold">Your BMI: <span className="text-indigo-600">{bmi}</span></p>
          <p className="text-md mt-1">Category: <span className="font-medium">{cat}</span></p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BMICard;
