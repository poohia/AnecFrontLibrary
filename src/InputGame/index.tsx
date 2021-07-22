import React, { useMemo } from "react";

type InputGameProps = JSX.IntrinsicElements["input"] & {
  animate?: boolean;
  like?: "title" | "subtitle";
  loading?: boolean;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGame = ({
  children,
  className = "",
  animate = false,
  loading,
  helperText,
  ...rest
}: InputGameProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--game-input";

    if (animate) {
      value += " animate__animated animate__backInUp";
    }

    return `${value} ${className}`;
  }, [className, animate]);

  return (
    <div className="anec--game-input-container">
      <input id="pseudo" type="text" className={classNameValue} {...rest} />
      {loading && (
        <div className="anec--game-input-loader preloader-wrapper small active">
          <div className="spinner-layer">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )}
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
};

export default InputGame;
