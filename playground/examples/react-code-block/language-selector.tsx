import { ComboBox } from 'prosekit/react/combo-box'
import { ComboBoxInput } from 'prosekit/react/combo-box-input'
import { ComboBoxItem } from 'prosekit/react/combo-box-item'
import { ComboBoxList } from 'prosekit/react/combo-box-list'
import { useRef, useState } from 'react'

import { languages } from './shikiji'

export default function LanguageSelector({
  language,
  setLanguage,
}: {
  language?: string
  setLanguage: (language: string) => void
}) {
  const [showComboBox, setShowComboBox] = useState(false)

  const closeComboBox = () => {
    setShowComboBox(false)
  }
  const toggleComboBox = () => {
    setShowComboBox((value) => !value)
  }

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="LANGUAGE_WRAPPER">
      <button
        className="LANGUAGE_BUTTON"
        onClick={toggleComboBox}
        ref={buttonRef}
        contentEditable={false}
      >
        {language || 'Plain Text'}
      </button>

      <ComboBox
        className="LANGUAGE_COMBO_BOX"
        active={showComboBox}
        reference={buttonRef.current ?? undefined}
        onDismiss={closeComboBox}
      >
        <ComboBoxInput
          placeholder="Search for a langauge..."
          className="LANGUAGE_COMBO_BOX_INPUT"
        ></ComboBoxInput>
        <ComboBoxList className="LANGUAGE_COMBO_BOX_LIST">
          {languages.map((language) => (
            <ComboBoxItem
              key={language}
              className="LANGUAGE_COMBO_BOX_ITEM"
              onSelect={() => setLanguage(language)}
            >
              {language}
            </ComboBoxItem>
          ))}
        </ComboBoxList>
      </ComboBox>
    </div>
  )
}