import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 95%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #f0f0f0;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 70%;
  margin-top: 30px;
  padding: 10px;
  font-size: 18px;
  background-color: #c9adf8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #9f71ed;
  }
`;

const AccountText = styled.span`
  padding-top: 20px;
  display: block;
`;

const RegisterText = styled.a`
  color: orange;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  height: 100%;
  padding: 40px 0px 40px 100px;
  @media (max-width: 1024px) {
    padding: 100px 0px 40px 100px;
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`;

const Image = styled.img`
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  @media (max-width: 1024px) {
    width: 425px;
  }
`;

const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: "Arial Rounded MT Bold", sans-serif;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.h1`
  text-align: center;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  color: #808080a1;
  justify-content: start;
  flex-direction: column;
  gap: 10px;
`;

const SubText = styled.span`
  text-align: left;
  display: flex;
  font-weight: 600;
  padding: 10px 0px 5px 10px;
`;

const PasswordText = styled.a`
  text-align: right;
  display: block;
  color: orange;
`;

const TermsText = styled.a`
  color: orange;
`;

const FormContainer = styled.div`
  width: 60%;
  padding: 50px;

  @media (max-width: 425px){
    padding: 0px 20px;
    width: 90%;
}
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend validation logic
    const newErrors = {};
    if (formData.username.trim() === "") {
      newErrors.username = "Login ID is required";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.name === "remember") {
      setFormData({ ...formData, remember: !formData.remember });
    } else {
      setFormData({ ...formData, terms: !formData.terms });
    }
    // setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <WrapperContainer>
      <ImgContainer>
        <Image src="/img/pencil.jpg" alt="Image" />
      </ImgContainer>
      <FormContainer>
        <TextContainer>
          <p>Login</p>
        </TextContainer>
        <form onSubmit={handleSubmit}>
          <SubText>Login ID</SubText>

          <div>
            <Input
              type="text"
              name="username"
              placeholder="Enter Login ID"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}
          </div>
          <div>
            <SubText>Password</SubText>
            <div className="password-box">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <i
                className={`show eye-icon ${
                  showPassword ? "fa fa-eye-slash" : "fa fa-eye"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <PasswordText href="#">Change Password</PasswordText>

          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleCheckboxChange}
                value={formData.remember}
              />
              Remember me
            </label>

            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleCheckboxChange}
                value={formData.terms}
              />
              Agree to <TermsText href="#">Terms & Conditions</TermsText>
            </label>
          </CheckboxContainer>

          <Button type="submit">Login</Button>

          <AccountText>
            Don't have an account?{" "}
            <RegisterText href="#">Register Here</RegisterText>
          </AccountText>
        </form>
      </FormContainer>
    </WrapperContainer>
  );
};

export default Login;
