Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.29693151,  0.        ,  1.22491944,  0.        ,  0.        ,        0.81339246,  1.10436869,  0.        ,  0.        ,  0.2784622 ,        1.59996939,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  1.04348207,        0.5078969 ,  0.54787791,  0.93996412,  0.55567694,  0.79689819,        0.        ,  0.        ,  0.75423402,  1.4537251 ,  1.04370356,        0.68262213,  0.17666049,  0.        ,  0.        ,  1.90096104,        0.        ,  0.        ,  0.        ,  0.49488392,  0.        ,        1.07687998,  0.5277254 ,  0.        ,  0.        ,  0.46208957,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.65683657,  2.1829989 ],       [ 0.        ,  1.53048313],       [ 0.50087702,  2.21762729],       [ 0.        ,  1.70219958],       [ 0.        ,  1.75441456],       [ 0.28055882,  1.57397985],       [ 0.37019938,  2.05736327],       [ 0.        ,  1.48141015],       [ 0.        ,  1.90228653],       [ 0.        ,  2.48301223],       [ 0.66010642,  2.81143594],       [ 0.        ,  1.37221014],       [ 0.        ,  2.2910862 ],       [ 0.        ,  2.53820968],       [ 0.        ,  1.63047087],       [ 0.        ,  1.42509186],       [ 0.        ,  1.6966846 ],       [ 0.        ,  1.97341323],       [ 0.        ,  1.74422181],       [ 0.35312915,  1.95988262],       [ 0.        ,  3.2141881 ],       [ 0.        ,  2.15754664],       [ 0.03862059,  2.07977509],       [ 0.        ,  2.36603153],       [ 0.22655874,  1.56942606],       [ 0.        ,  1.56871283],       [ 0.        ,  1.64210176],       [ 0.        ,  3.05208009],       [ 0.72565293,  2.28983092],       [ 0.31249821,  1.92663836],       [ 0.        ,  2.27999669],       [ 0.        ,  2.49094482],       [ 0.        ,  1.46903157],       [ 0.        ,  1.35461628],       [ 1.01967168,  2.93925571],       [ 0.        ,  1.96686101],       [ 0.        ,  2.77088141],       [ 0.        ,  1.77985799],       [ 0.        ,  2.1800895 ],       [ 0.        ,  1.49778783],       [ 0.22299206,  2.19727516],       [ 0.10934427,  1.18088448],       [ 0.        ,  1.82095242],       [ 0.        ,  1.67986429],       [ 0.        ,  2.28170088],       [ 0.        ,  1.52820516],       [ 0.        ,  1.72973955],       [ 0.        ,  1.66902852]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.37393608e+01],       [  5.47000000e+02,   5.54204750e+00],       [  1.73200000e+03,   2.48348141e+00],       [  5.47700000e+03,   6.90120161e-01],       [  3.16220000e+04,   1.99677691e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.07490635e+02],       [  5.47000000e+02,   8.97473812e-01,   1.03887825e+01],       [  1.73200000e+03,   1.56058550e+00,   3.47067451e+00],       [  5.47700000e+03,   4.20206457e-01,   1.01353514e+00],       [  3.16220000e+04,   8.98062438e-02,   3.60447228e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]