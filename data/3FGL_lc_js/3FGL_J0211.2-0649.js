Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.36547488,  1.15886474,  0.65487117,  0.        ,        1.49531996,  0.        ,  0.        ,  0.98587537,  0.        ,        0.08041207,  0.95896065,  0.5083338 ,  0.        ,  0.99955696,        0.07222682,  0.33756214,  0.67617154,  0.        ,  0.5825029 ,        0.48310357,  1.04577541,  0.74944806,  0.        ,  0.7739079 ,        0.        ,  0.46372932,  0.        ,  0.74710399,  0.        ,        0.34388974,  0.27561042,  0.57012701,  0.        ,  0.        ,        0.34868982,  0.38988444,  0.69583493,  0.75837898,  0.        ,        0.        ,  0.25592187,  0.        ,  0.59273869,  0.        ,        0.        ,  0.68805319,  1.18991172]
FluxHistoryError = [[ 0.        ,  1.5196569 ],       [ 0.        ,  2.08035928],       [ 0.46197098,  1.98685253],       [ 0.27303368,  1.18369484],       [ 0.        ,  1.22727442],       [ 0.90179914,  2.21287131],       [ 0.        ,  1.269189  ],       [ 0.        ,  1.17585552],       [ 0.36142367,  1.73263109],       [ 0.        ,  1.54431951],       [ 0.        ,  1.3077511 ],       [ 0.24661148,  1.82352161],       [ 0.        ,  1.86203873],       [ 0.        ,  1.85052919],       [ 0.33927268,  1.84212744],       [ 0.        ,  1.77559799],       [ 0.        ,  2.17131823],       [ 0.16225225,  1.3272351 ],       [ 0.        ,  1.83007956],       [ 0.        ,  2.17113489],       [ 0.        ,  2.43132955],       [ 0.41947746,  1.82086384],       [ 0.22006321,  1.5221194 ],       [ 0.        ,  1.51097977],       [ 0.2740548 ,  1.49474001],       [ 0.        ,  1.22117078],       [ 0.        ,  2.57438153],       [ 0.        ,  1.60944331],       [ 0.31379399,  1.3470403 ],       [ 0.        ,  1.1070925 ],       [ 0.01410735,  0.83121854],       [ 0.01765227,  0.74687982],       [ 0.        ,  2.56507695],       [ 0.        ,  1.18276215],       [ 0.        ,  2.06973433],       [ 0.        ,  1.77528277],       [ 0.10666731,  0.88660789],       [ 0.        ,  2.67760652],       [ 0.09922945,  1.57713342],       [ 0.        ,  1.92808652],       [ 0.        ,  1.52081013],       [ 0.        ,  2.45861104],       [ 0.        ,  1.17581213],       [ 0.        ,  2.97249395],       [ 0.        ,  1.22330761],       [ 0.        ,  1.7917341 ],       [ 0.22793919,  1.40061116],       [ 0.5082944 ,  2.03887677]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.18133125e+01],       [  5.47000000e+02,   6.20458174e+00],       [  1.73200000e+03,   1.93644691e+00],       [  5.47700000e+03,   1.03728819e+00],       [  3.16220000e+04,   2.41363700e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.84298439e+01],       [  5.47000000e+02,   2.81617141e+00,   9.84609795e+00],       [  1.73200000e+03,   1.18814492e+00,   2.78445792e+00],       [  5.47700000e+03,   7.17354059e-01,   1.41635144e+00],       [  3.16220000e+04,   0.00000000e+00,   4.14946115e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]