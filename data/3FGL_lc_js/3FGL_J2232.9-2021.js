Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.23448789,  0.        ,  0.30774024,  0.17149822,  0.        ,        1.3759805 ,  1.44303191,  0.74122512,  0.57903612,  0.28396729,        0.44655484,  0.        ,  0.        ,  1.2917372 ,  0.42168659,        0.        ,  0.1982722 ,  0.84169149,  0.26364225,  0.        ,        0.        ,  0.90729147,  0.35723126,  0.53346747,  0.33212292,        0.        ,  0.35340786,  1.32899022,  0.53357875,  0.        ,        1.15075004,  1.15561521,  0.48550341,  1.34753442,  0.55788052,        0.27195793,  0.        ,  0.        ,  0.        ,  0.55290157,        0.        ,  0.        ,  0.        ,  1.44367146,  0.        ,        0.32055566,  1.23864675,  1.23563886]
FluxHistoryError = [[ 0.        ,  2.28184927],       [ 0.        ,  1.30226123],       [ 0.        ,  1.62221637],       [ 0.        ,  1.67449646],       [ 0.        ,  1.28964591],       [ 0.58200777,  2.27734137],       [ 0.6683585 ,  2.43673444],       [ 0.22748238,  1.41546321],       [ 0.18632957,  1.18812716],       [ 0.        ,  1.76665965],       [ 0.08652866,  0.9554404 ],       [ 0.        ,  1.78492463],       [ 0.        ,  1.24942851],       [ 0.32380718,  2.51019096],       [ 0.        ,  1.64172143],       [ 0.        ,  1.68258083],       [ 0.        ,  1.60685775],       [ 0.13467622,  1.734689  ],       [ 0.        ,  2.62311143],       [ 0.        ,  1.38101602],       [ 0.        ,  1.70582104],       [ 0.33048242,  1.65778828],       [ 0.        ,  2.53578961],       [ 0.        ,  2.2312451 ],       [ 0.        ,  2.0943867 ],       [ 0.        ,  1.4926945 ],       [ 0.        ,  2.02626026],       [ 0.51458037,  2.30209446],       [ 0.12672633,  1.09713268],       [ 0.        ,  1.38703287],       [ 0.22373515,  2.25804424],       [ 0.51214832,  2.00363684],       [ 0.09484154,  1.0419904 ],       [ 0.68236327,  2.13058686],       [ 0.        ,  2.74499118],       [ 0.        ,  1.68809623],       [ 0.        ,  1.87039304],       [ 0.        ,  1.52082956],       [ 0.        ,  1.50289369],       [ 0.13135672,  1.23780227],       [ 0.        ,  1.24454701],       [ 0.        ,  1.56451225],       [ 0.        ,  1.63994014],       [ 0.27488458,  2.83712554],       [ 0.        ,  1.18196392],       [ 0.        ,  1.77699968],       [ 0.59283012,  2.072927  ],       [ 0.54984283,  2.10053539]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.17041779e+00],       [  5.47000000e+02,   1.17777729e+01],       [  1.73200000e+03,   1.61668885e+00],       [  5.47700000e+03,   8.95465612e-01],       [  3.16220000e+04,   1.83928385e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.47445679e+01],       [  5.47000000e+02,   7.79861355e+00,   1.59336166e+01],       [  1.73200000e+03,   7.73286104e-01,   2.57662249e+00],       [  5.47700000e+03,   5.66179395e-01,   1.29083133e+00],       [  3.16220000e+04,   7.98939764e-02,   3.48770201e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]