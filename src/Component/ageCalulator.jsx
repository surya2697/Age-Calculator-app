import { Box, FormLabel, HStack, Input, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import ErrorMessage from "./errorMessage";
const AgeCalulator = () => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [ageYear, setAgeYear] = useState("--");
  const [ageMonth, setAgeMonth] = useState("--");
  const [ageDays, setAgeDays] = useState("--");

  const [error, setError] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    //console.log(formData)
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();

    //setAge(formData)
    console.log(formData);
    if (!formData.day || !formData.month || !formData.year) {
      setError("All Feild are required");
    } else if (formData.day < 1 || formData.day > 30) {
      setError("Enter a valid date");
    } else if (formData.month < 1 || formData.month > 12) {
      setError("Enter a Valid Month");
    } else if (
      new Date(formData.year, formData.month - 1, formData.day) > new Date()
    ) {
      setError("The date is in the future");
    } else if (
      isNaN(new Date(formData.year, formData.month - 1, formData.day))
    ) {
      setError("Invalid date");
    } else {
      //calculate the date
      const birthDate = new Date(
        formData.year,
        formData.month - 1,
        formData.day
      );
      const currentDate = new Date();
      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();
      //console.log(days)

      if (days < 0) {
        months--;
        const prevMonthLastDay = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
        days += prevMonthLastDay;
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      console.log("Years:", years);
      console.log("Months:", months);
      console.log("Days:", days);
      setAgeYear(years);
      setAgeMonth(months);
      setAgeDays(days);
      setError("")
    }
  };

  return (
    <>
      <Box
        w={{ base: "90%", md: "60%", lg: "40%" }}
        margin="auto"
        backgroundColor="white"
        marginTop={{ base: "15%", md: "", lg: "5%" }}
        p="20px"
        borderStartRadius="20px"
        borderBottomEndRadius="150px"
        borderTopRightRadius="20px"
      >
        <HStack spacing={{ base: "4", md: "6", lg: "8" }} marginLeft="5px">
          <Box w={{ base: "30%", md: "20%", lg: "15%" }}>
            <FormLabel fontSize="sm" fontWeight="500" color="hsl(0, 0%, 8%)">
              DAY
            </FormLabel>
            <Input
              type="number"
              border="1px solid hsl(0, 0%, 86%)"
              placeholder="DD"
              fontSize="xl"
              fontWeight="600"
              color=" hsl(0, 1%, 44%)"
              value={formData.day}
              name="day"
              onChange={onChange}
            />
          </Box>
          <Box w={{ base: "30%", md: "25%", lg: "15%" }}>
            <FormLabel fontSize="sm" fontWeight="500" color="hsl(0, 0%, 8%)">
              MONTH
            </FormLabel>
            <Input
              type="number"
              border="1px solid hsl(0, 0%, 86%)"
              placeholder="MM"
              fontSize="xl"
              fontWeight="600"
              color=" hsl(0, 1%, 44%)"
              value={formData.month}
              name="month"
              onChange={onChange}
            />
          </Box>
          <Box w={{ base: "30%", md: "25%", lg: "15%" }}>
            <FormLabel fontSize="sm" fontWeight="500" color="hsl(0, 0%, 8%)">
              YEAR
            </FormLabel>
            <Input
              type="number"
              border="1px solid hsl(0, 0%, 86%)"
              placeholder="YYYY"
              fontSize="xl"
              color=" hsl(0, 1%, 44%)"
              fontWeight="600"
              value={formData.year}
              name="year"
              onChange={onChange}
            />
          </Box>
        </HStack>
        <Image
          backgroundColor="hsl(259, 100%, 65%)"
          src="./images/icon-arrow.svg"
          alt="arrow"
          borderRadius="50%"
          marginLeft={{ base: "42%", md: "", lg: "60%" }}
          marginTop={{ base: "35px", md: "", lg: "0px" }}
          w={{ base: "50px", md: "", lg: "60px" }}
          onClick={hanldeSubmit}
        />

        <hr />
        {error && <ErrorMessage message={error} />}
        <Text
          fontSize={{ base: "50px", md: "", lg: "80px" }}
          marginTop={{ base: "15px", md: "", lg: "10px" }}
          fontWeight="800"
        >
          <span style={{ color: "hsl(259, 100%, 65%)" }}>{ageYear}</span> years
        </Text>
        <Text fontSize={{ base: "50px", md: "", lg: "80px" }} fontWeight="800">
          <span style={{ color: "hsl(259, 100%, 65%)" }}> {ageMonth}</span>{" "}
          months
        </Text>
        <Text fontSize={{ base: "50px", md: "", lg: "80px" }} fontWeight="800">
          <span style={{ color: "hsl(259, 100%, 65%)" }}> {ageDays}</span> days
        </Text>
      </Box>
    </>
  );
};

export default AgeCalulator;
