import cl from './MyCheckBox.module.scss'
import React, {useEffect, useState} from "react";
interface MyCheckBoxProps {
  id: string
  labelText: string
  setFilterQuery: (e: (number | string)[]) => void
  value: number | string
  filterQuery: (number | string)[]
}

const MyCheckBox: React.FC<MyCheckBoxProps> = ({id, labelText, setFilterQuery, value, filterQuery}) => {

  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    if (filterQuery.indexOf(value) !== -1) setIsChecked(true)
    else setIsChecked(false)
  }, [filterQuery])

  const setFilter = () => {
    if (value === 'all') {
      setFilterQuery([...filterQuery.filter(e => e === value), value])
    } else {
      if (isChecked) {
        setFilterQuery([...filterQuery.filter(e => e !== value)])
      } else {
        setFilterQuery([...filterQuery.filter(e => e !== 'all'), value])
      }
    }
  }

  return (
    <div className={cl.container} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      setFilter()
    }}>
      <input
        className={cl.checkbox}
        type="checkbox"
        id={id}
        checked={isChecked}
        readOnly={true}
      />
      <label className={cl.label} htmlFor={id}>{labelText}</label>
      {
        isChecked
          && <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                setFilterQuery([...filterQuery.filter(e => e === value)])
              }}
              className={cl.only}
          >ТОЛЬКО</button>
      }
    </div>

  );
};

export default MyCheckBox;
