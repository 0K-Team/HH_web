import { Box, Slider } from "@mui/material";
import React from "react";

interface ChoiceSliderProps {
    labels: string[];
    name: string;
    path: string;
    setter: (name: string, path: string, value: number) => void;
}

const ChoiceSlider: React.FC<ChoiceSliderProps> = ({
    labels,
    name,
    path,
    setter
}) => {
    return (
        <Box className="w-full flex flex-col items-center mb-6">
            <Slider
                min={0}
                max={labels.length - 1}
                step={1}
                onChange={(_e, v) => {
                    setter(name, path, Array.isArray(v) ? v[0] : v);
                }}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => labels[v]}
                className="w-11/12"
                sx={{
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#29FF77',
                        width: 20,
                        height: 20,
                        borderRadius: '50%'
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#303030',
                        height: 8
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: '#29FF77',
                        height: 8
                    },
                    '& .MuiSlider-mark': {
                        backgroundColor: '#29FF77'
                    },
                    '& .MuiSlider-valueLabel': {
                        backgroundColor: '#29FF77',
                        color: '#1E1E1E'
                    },
                }}
            />
        </Box>
    )
}

export default ChoiceSlider;