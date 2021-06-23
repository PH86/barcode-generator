import React from 'react'
import { useBarcode } from '@createnextapp/react-barcode';

interface IBarcode {
    barcode: string,
}

export const Barcode: React.FC<IBarcode> = ({barcode}): React.ReactElement => {
    const { inputRef } = useBarcode({
        value: `${barcode}`,
        options: {
          background: '#ccffff',
        }
      });
    return (
        <div>
            <svg ref={inputRef} />
        </div>
    )
}
