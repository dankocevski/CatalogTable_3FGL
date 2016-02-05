Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 4.45661163,  4.71993303,  5.04915142,  4.17622709,  6.76056814,        6.08161259,  3.73548627,  5.32513428,  3.53622866,  7.89966297,        7.94756985,  5.90643263,  8.06947327,  7.74708223,  6.26562691,        6.49184942,  4.97089291,  6.30400133,  4.37673569,  7.82833338,        5.49282026,  4.3389163 ,  4.17317295,  7.55433702,  6.66251326,        5.78033018,  7.40123415,  6.10634041,  3.9651382 ,  3.21211648,        5.25303078,  5.67566013,  4.86722326,  5.24824429,  7.51298285,        8.29575825,  3.99829054,  5.06640911,  7.32166529,  6.70732403,        6.70182705,  6.43655157,  5.2724247 ,  5.92725611,  5.00893497,        7.22786808,  5.08176804,  5.55671215]
FluxHistoryError = [[ 3.19565225,  5.82689667],       [ 3.4298954 ,  6.12948799],       [ 3.77292132,  6.4280529 ],       [ 2.93412232,  5.54200649],       [ 5.40825319,  8.20104408],       [ 4.79209614,  7.47711277],       [ 2.47223067,  5.12904453],       [ 4.00851727,  6.75515747],       [ 2.38451767,  4.81418037],       [ 6.46650267,  9.42738247],       [ 6.41406393,  9.59017563],       [ 4.589468  ,  7.32779026],       [ 6.6370821 ,  9.59171486],       [ 6.43439913,  9.14515209],       [ 4.90877295,  7.71785259],       [ 5.21454811,  7.85480928],       [ 3.74392605,  6.29927921],       [ 4.94886875,  7.74346256],       [ 3.14609432,  5.71222305],       [ 6.48039198,  9.25999832],       [ 4.28813791,  6.79165268],       [ 3.11782575,  5.6654911 ],       [ 3.07653809,  5.36286211],       [ 6.11363697,  9.09116554],       [ 5.40223742,  8.01178551],       [ 4.43021631,  7.25121307],       [ 6.07218552,  8.81131268],       [ 4.77358532,  7.52406979],       [ 2.73975229,  5.30933571],       [ 2.14187884,  4.39612055],       [ 3.96959114,  6.64550257],       [ 4.51157665,  6.92068577],       [ 3.65570474,  6.18549824],       [ 4.04001617,  6.54977894],       [ 6.15460205,  8.96136951],       [ 6.83200502,  9.85168552],       [ 2.83184505,  5.2654953 ],       [ 3.63415337,  6.6117816 ],       [ 5.99330044,  8.73474216],       [ 5.35522318,  8.15178013],       [ 5.32577467,  8.16765594],       [ 5.11344671,  7.85614443],       [ 4.03275394,  6.60571718],       [ 4.733706  ,  7.19826126],       [ 3.84867334,  6.27211094],       [ 5.91089296,  8.62947655],       [ 3.83726311,  6.42365456],       [ 4.18150711,  7.03702879]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.06708496e+02],       [  5.47000000e+02,   1.49779572e+02],       [  1.73200000e+03,   3.16981297e+01],       [  5.47700000e+03,   1.43277884e+00],       [  3.16220000e+04,   6.17518745e-05]]
SpectrumError = [[  1.73000000e+02,   3.76534790e+02,   4.36882202e+02],       [  5.47000000e+02,   1.42685852e+02,   1.56873291e+02],       [  1.73200000e+03,   2.96958351e+01,   3.37004242e+01],       [  5.47700000e+03,   1.04638934e+00,   1.87276340e+00],       [  3.16220000e+04,   0.00000000e+00,   3.34571899e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]