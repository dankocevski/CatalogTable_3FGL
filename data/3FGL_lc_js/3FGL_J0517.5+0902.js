Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.36032641,  6.06557274,  0.94620907,  1.21221638,        1.77348506,  3.86241007,  0.93142837,  2.43712711,  0.        ,        0.        ,  2.54923797,  2.64160967,  0.        ,  0.72127813,        0.1824982 ,  0.43426064,  0.        ,  0.17467435,  0.        ,        0.        ,  0.        ,  4.06375313,  0.56925726,  3.45812774,        2.53287435,  1.76643717,  0.        ,  1.131531  ,  1.63732708,        1.82621443,  1.47716117,  0.        ,  1.49556792,  0.        ,        0.        ,  0.79086161,  0.51530564,  1.0983063 ,  0.        ,        0.        ,  1.79344487,  0.        ,  0.        ,  1.22669983,        0.        ,  0.        ,  2.70622683]
FluxHistoryError = [[ 0.        ,  3.6603353 ],       [ 0.        ,  5.08737886],       [ 3.65905476,  8.34889221],       [ 0.        ,  4.25085413],       [ 0.28466678,  2.55004025],       [ 0.62073588,  3.39716363],       [ 1.94367802,  5.86252499],       [ 0.        ,  5.43105882],       [ 1.23777533,  3.84343529],       [ 0.        ,  4.99533319],       [ 0.        ,  3.22066045],       [ 0.7182399 ,  4.74350262],       [ 1.36164176,  4.06967688],       [ 0.        ,  3.21893406],       [ 0.        ,  5.06358474],       [ 0.        ,  4.54990028],       [ 0.        ,  4.85902146],       [ 0.        ,  2.59386921],       [ 0.        ,  5.10493691],       [ 0.        ,  4.1873703 ],       [ 0.        ,  2.64556193],       [ 0.        ,  3.39100885],       [ 1.82295418,  6.81754303],       [ 0.        ,  5.56236029],       [ 0.72394657,  6.63698196],       [ 0.        ,  7.45387244],       [ 0.        ,  7.05173314],       [ 0.        ,  2.75309038],       [ 0.        ,  6.08412528],       [ 0.40756619,  3.2639935 ],       [ 0.40137637,  3.77724838],       [ 0.        ,  4.84929228],       [ 0.        ,  4.05108547],       [ 0.        ,  6.69072306],       [ 0.        ,  3.96473765],       [ 0.        ,  2.35753632],       [ 0.        ,  5.24634409],       [ 0.        ,  4.42163575],       [ 0.        ,  5.2332164 ],       [ 0.        ,  3.11705112],       [ 0.        ,  4.3230505 ],       [ 0.17859542,  3.98293519],       [ 0.        ,  3.8223269 ],       [ 0.        ,  5.04192305],       [ 0.        ,  4.42304516],       [ 0.        ,  4.2483592 ],       [ 0.        ,  4.55517769],       [ 1.27684546,  4.32508469]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.54680067e-01],       [  5.47000000e+02,   4.63864403e+01],       [  1.73200000e+03,   2.32507682e+00],       [  5.47700000e+03,   9.21123087e-01],       [  3.16220000e+04,   2.60454118e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.68528942e+02],       [  5.47000000e+02,   3.25122490e+01,   5.92964935e+01],       [  1.73200000e+03,   8.19529533e-01,   3.96038198e+00],       [  5.47700000e+03,   5.49816966e-01,   1.36695600e+00],       [  3.16220000e+04,   1.25827715e-01,   4.54488456e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]